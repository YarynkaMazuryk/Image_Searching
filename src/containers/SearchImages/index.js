import React, { Component } from 'react';

import SearchForm from '../../components/SearchForm';
import ImageContainer from "../../components/ImagesContainer";
import Loader from "../../components/Loader";

import './SearchImages.scss';

export default class SearchImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
          urls: [],
          isLoading: false
        }
        this.savePredefinedUrls = this.savePredefinedUrls.bind(this);
        this.isLoading = this.isLoading.bind(this);
      }
      savePredefinedUrls (urls) {   
        this.setState({ urls });
      }
      isLoading (isLoading) {
        this.setState({isLoading});
      }
      render () {
        const { urls, isLoading } = this.state;
        return ( 
          <div className="SearchImages">
            <h2 className="title">Find images</h2>
            <SearchForm saveUrls = {this.savePredefinedUrls} isLoading = {this.isLoading}/>
            { isLoading ? <Loader/> : <ImageContainer urls ={urls}/> }
          </div>
        );
      }
    }

