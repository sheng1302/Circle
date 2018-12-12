import React, {Component} from 'react';
import StackGrid, {transitions} from "react-stack-grid";
import ItemBox from "./ItemBox";


class ReservedItemList extends Component{


    render(){
        const { width } = this.props;
        const { scaleDown } = transitions;
        return(

            <StackGrid
                columnWidth={width <= 768 ? '100%' : '33.33%'}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                monitorImagesLoaded={true}
                duration={0}>

                {
                    this.props.itemList.map((eachComponent, index) => {

                        return(
                            <div id={index + 1} key={`key${index}`} >
                                <ItemBox title={eachComponent.Item.description}
                                         category={eachComponent.Item.category}
                                         date={eachComponent.Item.createdAt}
                                         description={eachComponent.Item.description}
                                         image={eachComponent.Item.item_pic_url}
                                         address={eachComponent.Item.pick_up_address}
                                         item={eachComponent.Item}
                                         buttonLabel={"Task Complete"}
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


export default ReservedItemList;