import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//components that need routing and rendering
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Main from './main.js';
import Arches from './balloons/archesGrid.js';
import Columns from './balloons/columnsGrid.js';
import CustomCreations from './balloons/customCreationsGrid.js';
import ParadeFloats from './balloons/paradeFloatsGrid.js';
import Centerpieces from './balloons/centerpiecesGrid.js';
import FlowerArrangements from './flowers/arrangementsGrid.js';
import CorsagesBoutonnieres from './flowers/corsagesBoutonnieresGrid.js';
import SympathyDesigns from './flowers/sympathyDesignsGrid.js';
import Weddings from './flowers/weddingsGrid.js';

render (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/balloondecor/arches" component={Arches}/>
        <Route path="/balloondecor/columns" component={Columns}/>
        <Route path="/balloondecor/custom" component={CustomCreations}/>
        <Route path="/balloondecor/floats" component={ParadeFloats}/>
        <Route path="/balloondecor/centerpieces" component={Centerpieces}/>
        <Route path="/floraldesigns/arrangements" component={FlowerArrangements}/>
        <Route path="/floraldesigns/corsagesboutonnieres" component={CorsagesBoutonnieres}/>
        <Route path="/floraldesigns/sympathy" component={SympathyDesigns}/>
        <Route path="/floraldesigns/weddings" component={Weddings}/>
      </Route>
    </Router>,
    document.getElementById('content')
)
