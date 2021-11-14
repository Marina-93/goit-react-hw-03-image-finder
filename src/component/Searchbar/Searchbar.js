import { Component } from "react";
import PropTypes from 'prop-types';
import './Searchbar.css';

export default class Searchbar extends Component{
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({ value: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault()
        const { value } = this.state
        
        if (value.trim() === '') {
            return;
        }
        
        this.props.onSubmit(value)
        this.setState({ value: '' });
    }

    render() {
        return (
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="form">
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    
                    <input
                        className="input"
                        type="text"
                        name="value"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}