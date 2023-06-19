import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import './mainBlock.less'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'

const MainBlockView = () =>{
    return(
        <div className="main-bodyCon">
          
        <Breadcrumb/>
        

        <div className="content">
            <div className="sidebar">
                {/* i added the sidebar here */}
              <Sidebar/>
              
            </div> 

            <div className="courses-side">
                {/* i add the main content here  */}
              <Content/>
            </div>
          </div>
        </div>
    )
}

export default MainBlockView