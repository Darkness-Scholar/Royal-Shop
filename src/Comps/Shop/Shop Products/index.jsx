import React from 'react';
import Item from './Item';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { appData } from './../../../Data & State/Data'
function Shop_Products(props) {
    const itemdata = useRecoilValue(appData)
    console.log(itemdata);

    return (
        <section className="lattest-product-area pb-40 category-list">
            <div className="row">
                {itemdata.map((value, index) => {
                    return <Item key = {index} data_for_item = {value}/>
                })}
            </div>
        </section>
    );
}

export default Shop_Products;