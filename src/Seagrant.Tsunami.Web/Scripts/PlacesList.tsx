/// <reference types="google.analytics" />

import * as React from "react";
import * as MainPage from "./MainPage";

export interface PlacesList {
    places: MainPage.Place[];
    onChangeHandler(place: MainPage.Place): void;
}

interface State {
    currentPlace: MainPage.Place;
}

export class PlacesListComponent extends React.Component<PlacesList, State> {
    constructor(props: PlacesList) {
        super(props);
        this.state = {
            currentPlace: props.places[0]
        };
    }

    createListElement = (place: MainPage.Place) => {
        return (
            <option value={place.name} key={place.name}>{place.name}</option>
        );
    }

    findPlaceByName = (name: string): MainPage.Place => {
        for (let place of this.props.places) {
            if (place.name == name) {
                return place;
            }
        }
        //Default to the first place on the list if something went wrong finding the place.
        return this.props.places[0];
    }

    handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        const placeName = e.currentTarget.value;
        const newPlace = this.findPlaceByName(placeName);
        ga("send", "event", "Places", "SelectedPlace", placeName);
        this.setState({
            currentPlace: newPlace
        });
        this.props.onChangeHandler(newPlace);
    }

    render() {
        const options = this.props.places.map(this.createListElement);
        return (
            <div className="TitleClass" id="Title">
                <select value={this.state.currentPlace.name} onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        );
    }
}
