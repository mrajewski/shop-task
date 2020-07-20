import React from "react";
import { Icon } from "semantic-ui-react";

const Rating = ({rating}) => {
    return (
        <div className="main__rating">
            <Icon name="star" color={rating > 0 ? 'yellow' : 'grey'}/>
            <Icon name="star" color={rating > 1 ? 'yellow' : 'grey'}/>
            <Icon name="star" color={rating > 2 ? 'yellow' : 'grey'}/>
            <Icon name="star" color={rating > 3 ? 'yellow' : 'grey'}/>
            <Icon name="star" color={rating > 4 ? 'yellow' : 'grey'}/>
        </div>
    )
}

export default Rating