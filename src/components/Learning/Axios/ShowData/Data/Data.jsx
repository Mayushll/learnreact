import React from 'react';

export function Data({data, loading}) {
    return (
        <div style={{display: loading ? "none" : "flex", flexWrap: "wrap"}}>
            {data.map ((img) => <img key={img.id} src={img.url} alt={img.url} width={"100px"}/>)}
        </div>
    );
}
