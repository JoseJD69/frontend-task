import React, {FC} from "react";
import {Outlet} from "react-router-dom";

export const LayoutComponent: FC = () => {

    return (
        <div className="container mx-auto">
            <Outlet></Outlet>
        </div>
    );
}