import React, {Component} from 'react';
import ItemBox from './ItemBox';
import sizeMe from 'react-sizeme';
import StackGrid, {transitions} from "react-stack-grid";
import ItemImage from "./ItemImage";
import '../styles/ItemList.css';

const { scaleDown } = transitions;

class ItemList extends Component{

    render(){
        const { width } = this.props;

        return(

                <StackGrid
                    columnWidth={width <= 768 ? '100%' : '33.33%'}
                    appear={scaleDown.appear}
                    appeared={scaleDown.appeared}
                    enter={scaleDown.enter}
                    entered={scaleDown.entered}
                    leaved={scaleDown.leaved}
                    gutterWidth={6}
                    gutterHeight={10}
                    monitorImagesLoaded={true}
                    >

                    {
                        this.props.itemList.map((item, index) => {

                            return(
                                <div className="image" key={`key${index+1}`} >
                                    <ItemImage
                                        imageSource={item.item_pic_url}
                                    />


                                    <div className="image-caption-wrapper">
                                        <div className="image-caption">

                                                <ItemBox title={item.description}
                                                    description={item.User}
                                                    item={item}
                                                    address={item.pick_up_address}
                                                    buttonLabel={"reserve"}
                                                    completePhrase={"reserved"}
                                                    callFrom={"itemList"}
                                                    btnClassName={"btn-primary-white-item"}
                                                />

                                        </div>
                                    </div>


                                </div>
                            );

                        })
                    }

                </StackGrid>

        );
    }
}

export default sizeMe()(ItemList);

