import React, { Component } from 'react'
import {connect} from 'react-redux'
import{createBreif} from '../actions/briefAction'
import PropTypes from 'prop-types';
import '../style/form.css';
import Select from 'react-select';
const options = [
  { value: 1, label: "Bag Box" },
  { value: 2, label: "Oval Box" },
  { value: 3, label: "Round Box" },
  { value: 4, label: "Other Box" },
];
class BriefForm extends Component {
  

    constructor(props){
        super(props);
        this.state={
            title:'',
            comment:'',
            selectedOption:null,
            loading: false

        };

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleChange = selectedOption => {
      this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
      );
    };
    onSubmit(e) {
        e.preventDefault();
    
        const breif = {
          title: this.state.title,
          comment: this.state.comment,
          productId:this.state.selectedOption.value
        }
        this.setState({ loading: true });

     
        this.props.createBreif(breif);
           setTimeout(() => {
            this.setState({ loading: false });
          }, 2000);
 
 }
 
   
    render() {
      const { loading } = this.state;

        return (
            <div>
            <h1>Add Breif</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}

                  />
              </div>
              <br />
              <div>
                <label>Comment: </label>
                <br />
                <input
                  type="text" 
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onChange}

                  />
              </div>
              <br />              <div>
                <label>Product ID: </label>
                <br />

               <Select
                type="number"
                name="productId"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={options}
                />
              </div>
              <br />
              <button type="submit" disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Sending Data To Server</span>}
          {!loading && <span>Add Breif</span>}
        </button>
            </form>
          </div>
        )
    }
}
BriefForm.propTypes={
  createBreif:PropTypes.func.isRequired,
};export default connect(null,{createBreif})(BriefForm);