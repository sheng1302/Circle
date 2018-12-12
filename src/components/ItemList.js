import React, {Component} from 'react';
import ItemBox from '../components/ItemBox';
import sizeMe from 'react-sizeme';
import StackGrid, {transitions} from "react-stack-grid";
import ItemImage from "./ItemImage";


const { scaleDown } = transitions;

class ItemList extends Component{

    render(){
        const {
            size: {
                width
            }
        } = this.props;

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

                                    <ItemBox //title={item.description}
                                        //category={item.category}
                                        //date={item.createdAt}
                                        //description={item.description}
                                        image={item.item_pic_url}
                                        //address={item.pick_up_address}
                                        item={item}
                                        //buttonLabel={"reserve"}
                                        //completePhrase={"reserved"}
                                        //callFrom={"itemList"}
                                    />
                                </div>
                            );

                        })
                    }

                </StackGrid>

        );
    }
}

export default sizeMe()(ItemList);

