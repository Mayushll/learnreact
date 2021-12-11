import React from 'react';
import {Loading} from "../../../../shared/Loading/Loading";
import {Data} from "./Data/Data";

export function ShowData({data, loading}) {

    return (
        <div>
            {loading ? <Loading /> : null}
            {data ? <Data data={data} loading={loading}/> : null}

        </div>
    );
}