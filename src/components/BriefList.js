import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import{fetchBreifs} from '../actions/briefAction'
import '../style/list.css'


class BriefList extends Component {
componentWillMount(){
 this.props.fetchBreifs();
}
 render() {

       const briefItems=this.props.briefs.map(breif =>(
  <tr>
    <td> {breif.title} </td>
    <td>{breif.comment} </td>
    <td> {breif.productId}  </td>

  
  </tr>
        ));
 
       

        return (
            <div>
               <h1>BriefList</h1>
               <table>
  <tr>
    <th>Title </th>
    <th>Comment  </th>
    <th>ProductId </th>
  </tr>
               {briefItems}
               </table>
            </div>
        )
    }
}
BriefList.propTypes={
    fetchBreifs:PropTypes.func.isRequired,
    briefs:PropTypes.array.isRequired
};
const mapStateToProps =state =>({
    briefs:state.briefs.items
})
export default connect(mapStateToProps,{fetchBreifs})(BriefList);
