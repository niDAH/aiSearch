import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Graph } from 'react-d3-graph';
import { mapSubNodes } from '../utils/dataTransform';
import { tradingPartnerRequest } from '../actions/actionCreators';

export default function NetworkGraph({ companyName, graphData, graphConfig }) {
    const dispatch = useDispatch();
    const [d3data, setD3data] = useState([]);
    const subNodes = useSelector((state) => state.search.tradingPartners);
    const [supplierNode, setSupplierNode] = useState(null);

    const supplierClick = (node) => {
        setSupplierNode(node);
        dispatch(tradingPartnerRequest(node));
    }

    useEffect(() => {
        if (companyName && graphConfig && graphData) {
            setD3data(mapSubNodes(graphData, companyName));
        }
    }, [companyName, graphConfig, graphData]);

    useEffect(() => {
        const extraNodes = {};
        const listOfIds = [];
        if (subNodes.length && supplierNode) {
            extraNodes[supplierNode] = subNodes;

            subNodes.forEach((node) => {
                listOfIds.push(node.altana_canon_id);
            });

            extraNodes[supplierNode] = listOfIds.toString();

            setD3data(mapSubNodes(extraNodes, supplierNode));
        }
    }, [subNodes, supplierNode]);

    return (
        <div>
            <Graph
                id="suppliersPerCompany"
                data={d3data}
                config={graphConfig}
                onClickNode={(node) => supplierClick(node)}
            />
        </div>
    );
}
