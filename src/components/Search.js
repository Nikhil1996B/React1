import React,{ Component } from 'react'


class Search extends Component{
    filterUpdate(){
       const val= this.myValue.value;
       this.props.filterUpdate(val);
    }
    render(){
return(<header>
    <div>
        <form>
            <input type="text" placeholder="Type Filter here"
            ref={(value)=>{this.myValue=value} }
            onChange={this.filterUpdate.bind(this)}/>
        </form>
    </div>
    </header>
)
    }
}
export default Search;