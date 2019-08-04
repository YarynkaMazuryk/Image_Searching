import React, { Component } from 'react'
import { getImages } from '../../api/apiList'
import {urlFormer} from '../../helpers/urlFormer'

import './SearchForm.scss'

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    
    handleChange (e) {
        this.setState({keyword: e.target.value});
    }
    
    handleClick () {
        const {keyword} = this.state;
        if (keyword) {
            getImages(keyword)
            .then((res) => {
               const urls = res.photos.photo.map(item => urlFormer(item));
               this.props.saveUrls(urls);
            }).catch(err => console.log(err))
        }   
    }

    render() {
        const {keyword} = this.state;
        return (
            <div className="searchFormContainer">
                <input
                    type = "search"
                    name = "search"
                    placeholder = "Please enter keyword"
                    className = "searchForm"
                    onChange = {(e) => this.handleChange(e)}
                    value={keyword}
                />
                <input type="submit"
                    value="search"
                    className = "searchSubmit"
                    onClick={() => this.handleClick()}
                />
            </div>
        )
    }
}
