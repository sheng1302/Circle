import React, {Component} from 'react';
import StackGrid, {transitions} from "react-stack-grid";
import ItemBox from "./ItemBox";
import sizeMe from 'react-sizeme';

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
                            <div className="image" key={`key${index + 1}`} >

                                <ItemBox //title={eachComponent.Item.description}
                                         //category={eachComponent.Item.category}
                                         //date={eachComponent.Item.createdAt}
                                         description={eachComponent.Item.description}
                                         image={eachComponent.Item.item_pic_url}
                                         address={eachComponent.Item.pick_up_address}
                                         item={eachComponent.Item}
                                         buttonLabel={"Complete"}
                                         completePhrase={"Completed"}
                                         callFrom={"reservedItemList"}/> {/*item is the item itself to be reference ..*/}

                            </div>
                        );

                    })
                }

            </StackGrid>

        );
    }

}


export default sizeMe()(ReservedItemList);