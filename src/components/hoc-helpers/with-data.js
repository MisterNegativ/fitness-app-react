import React, {Component} from 'react';
import Loader from "../Loader";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps) {
            if(this.props.getData !== prevProps.getData) {
                this.update()
            }
        }// вызывается при обновлении компонента.

        componentDidMount() {
            this.update()
        }//вызывается при монтировании компонента.

        update() {
            this.setState({
                loading: true,
                error: false
            });

            this.props.getData()
                .then( (data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                }).catch( () => {
                    this.setState({
                        error: true,
                        loading: false
                    });
            } )
        }//Устанавливает loading в true и error в false перед запросом данных. Вызывает this.props.getData() для получения данных. В случае успешного получения данных, устанавливает data и loading в false. В случае ошибки, устанавливает error и loading в false.

        render() {
            const {data, loading, error} = this.state;

            if(loading) return <Loader />;
            if(error) return <ErrorIndicator />;

            return <View {...this.props} data={data}/>;//В противном случае отображается оригинальный компонент View с данными из состояния.
        }
    }
};

export default withData;