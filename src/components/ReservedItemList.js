import React, {Component} from 'react';
import StackGrid, {transitions} from "react-stack-grid";
import ItemBox from "./ItemBox";
import sizeMe from 'react-sizeme';
import ItemImage from "./ItemImage";

const { scaleDown } = transitions;
class ReservedItemList extends Component{


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
                    this.props.itemList.map((eachComponent, index) => {

                        return(
                            <div className="image-container" key={`key${index + 1}`} >

                                <ItemImage
                                    className="image"
                                    imageSource={eachComponent.Item.item_pic_url}
                                    imgClassName={"image"}
                                />

                                <div className="image-caption-wrapper">
                                    <div className="image-caption">

                                        <ItemBox title={eachComponent.Item.description}
                                                 description={eachComponent.Item.User}
                                                 item={eachComponent.Item}
                                                 address={eachComponent.Item.pick_up_address}
                                                 buttonLabel={"Complete"}
                                                 completePhrase={"Completed"}
                                                 callFrom={"reservedItemList"}
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


export default sizeMe()(ReservedItemList);