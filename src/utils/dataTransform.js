export const mapSubNodes = (graph, node) => {
    const res = {
        nodes: [
            {
                id: node,
                color: 'red',
                size: 300,
                symbolType: 'square',
                fontWeight: 'bold'
            }
        ],
        links: []
    };
    console.log('graph', graph);
    graph[node].forEach((n) => {
        res.nodes.push({ id: n });
        res.links.push({ source: node, target: n });
    });
    return res;
};
