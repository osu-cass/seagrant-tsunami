/// <reference types="google.analytics" />

import * as React from "react";
import * as MainPage from "./MainPage";

export interface PlacesList {
    places: MainPage.Place[];
    currentPlace: MainPage.Place;
    onChangeHandler(place: MainPage.Place): void;
}

export class PlacesListComponent extends React.Component<PlacesList, {}> {

    createListElement = (place: MainPage.Place) => {
        return (
            <option value={place.name} key={place.name}>{place.name}</option>
        );
    }

    handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        const placeName = e.currentTarget.value;
        const newPlace = this.props.places.find((p) => p.name === placeName);
        ga("send", "event", "Places", "SelectedPlace", placeName);
        this.props.onChangeHandler(newPlace);
    }

    render() {
        const options = this.props.places.map(this.createListElement);
        return (
            <div className="TitleClass" id="Title">
                <select value={this.props.currentPlace.name} onChange={this.handleChange} >
                    {options}
                </select>
            </div>
        );
    }
}
