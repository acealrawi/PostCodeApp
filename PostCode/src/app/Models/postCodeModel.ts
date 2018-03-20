export interface Municipality {
    id: string;
    label: string;
}

export interface City {
    id: string;
    label: string;
}

export interface Properties {
    name: string;
}

export interface Crs {
    type: string;
    properties: Properties;
}

export interface Rd {
    type: string;
    coordinates: number[];
    crs: Crs;
}

export interface Properties2 {
    name: string;
}

export interface Crs2 {
    type: string;
    properties: Properties2;
}

export interface Wgs84 {
    type: string;
    coordinates: number[];
    crs: Crs2;
}

export interface Center {
    rd: Rd;
    wgs84: Wgs84;
}

export interface Geo {
    center: Center;
}

export interface Nen5825 {
    postcode: string;
    street: string;
}

export interface Province {
    id: string;
    label: string;
}

export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface Address {
    purpose: string;
    postcode: string;
    surface: number;
    municipality: Municipality;
    city: City;
    letter?: any;
    geo: Geo;
    nen5825: Nen5825;
    addition?: any;
    number: number;
    year: number;
    province: Province;
    id: string;
    type: string;
    street: string;
    _links: Links;
}

export interface Embedded {
    addresses: Address[];
}

export interface Self2 {
    href: string;
}

export interface Links2 {
    self: Self2;
}

export interface RootObject {
    _embedded: Embedded;
    _links: Links2;
}


