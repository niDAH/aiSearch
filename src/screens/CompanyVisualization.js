import { useEffect, useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NetworkGraph from '../components/NetworkGraph';

import { companyDetailSet, companyRequest } from '../actions/actionCreators';

const graphConfig = {
    nodeHighlightBehavior: true,
    minZoom: 1,
    width: window.innerWidth,
    height: window.innerHeight - 100,
    node: {
        color: 'lightgreen',
        size: 240,
        fontColor: 'white',
        fontSize: 14,
        highlightFontSize: 14,
        highlightStrokeColor: 'white'
    },
    link: {
        highlightColor: "lightblue"
    }
};

export default function CompanyVisualization({ result, state}) {
    const dispatch = useDispatch();
    const [graphData, setGraphData] = useState(null);
    const location = useLocation();

    let { companyId } = useParams();

    const companyDetails = useSelector((state) => state.search.companyDetails);

    useEffect(() => {
        if (location.state.result) {
            dispatch(companyDetailSet(location.state.result));
        } else if (!companyDetails.company_context && companyId) {
            // if we don't have the company details, fetch them
            // this could happen if you refresh the page or if you clear your storage/session/etc.
            dispatch(companyRequest(companyId));
        }
    }, [companyDetails, companyId, dispatch, location.state.result]);

    useEffect(() => {
        if (companyDetails.company_context && graphData === null) {
            setGraphData({
                [companyDetails.company_name]: companyDetails.company_context.suppliers,
            });
        }
    }, [companyDetails, graphData]);

    return (
        <div>
            <Link to="/">Back to search</Link>
            <h5>Suppliers for <em>{companyDetails.company_name}</em></h5>

            <NetworkGraph
                companyName={companyDetails.company_name}
                graphConfig={graphConfig}
                graphData={graphData}
            />
        </div>
    );
}
