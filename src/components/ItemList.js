import React, {Component} from 'react';
import ItemBox from '../components/ItemBox';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions } from "react-stack-grid";

class ItemList extends Component{



    render(){
        const { width } = this.props;
        const { scaleDown } = transitions;
        return(

                <StackGrid
                    columnWidth={width <= 768 ? '100%' : '33.33%'}
                    gutterWidth={10}
                    gutterHeight={10}
                    appear={scaleDown.appear}
                    appeared={scaleDown.appeared}
                    enter={scaleDown.enter}
                    entered={scaleDown.entered}
                    leaved={scaleDown.leaved}
                    monitorImagesLoaded={true}
                    duration={0}>

                    {
                        this.props.itemList.map((item, index) => {

                            return(
                                <div id={index + 1} key={`key${index}`} >
                                    <ItemBox //title={item.description}
                                             //category={item.category}
                                             //date={item.createdAt}
                                             //description={item.description}
                                             image={item.item_pic_url}
                                             //address={item.pick_up_address}
                                             item={item}
                                             //buttonLabel={"reserve"}
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

