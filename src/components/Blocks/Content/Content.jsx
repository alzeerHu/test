import reducers from '../../../../omelette/src/reducers';

import React, { useState } from 'react'
import './Content.less'

import StarRatingComponent from 'react-star-rating-component';


import icon1 from '../../../components/Blocks/Sidebar/resources/data_protection.png'
import icon2 from '../../../components/Blocks/Sidebar/resources/fraud_prevention.png'
import icon3 from '../../../components/Blocks/Sidebar/resources/it_security.png'
import icon4 from '../../../components/Blocks/Sidebar/resources/wphg.png'

//redux
import {connect} from 'react-redux'

// i selected the data from redux , i can use 2 ways to select data  1- directly from redex , 2- i can select which data i want 
import { selectList } from '../../../reducers/courses/courses.reselect';

const Content = ({redux_course, selectList}) => {

    console.log(selectList);
// here i made a 4 list based on the Category  , i dosnt has be hard coded like this ,i can still change that in redux
    const categoryIcons = {
        "Category 1": icon1,
        "Category 2": icon2,
        "Category 3": icon3,
        "Category 4": icon4
      };
    const categoryLists = {
        "Category 1": [],
        "Category 2": [],
        "Category 3": [],
        "Category 4": []
      };

      for (const course of selectList) {
        categoryLists[course.category].push(course);
      }

    //   const language = useSelector((state) => state.courseReducer.courses_list);

      
  return (
    <div className='Content-con'>
        <div className="Content-con-title">
            e-learing Coursesss
        </div>

        {Object.entries(categoryLists).map(([category, courseList]) =>(
                
                <div className="Content-con-Main-courses" key={category}>

                    <div className="icon">
                        <img src={categoryIcons[category]} alt="" />
                    </div>
                    <div className="details" >
                    {courseList.map((course, index) => (        
                        <div className="" key={index}>
                            <div className="text"><div className='p' data-testid={'course_name'}>{course.name}</div></div>
                            <div className="duration">
                                <div className="num">{course.duration} min</div>
                                <div className="text">To be done by :</div>
                            </div>

                            <div className="rating">
                                <div className="stare">
                                  
                                <StarRatingComponent 
                                    name="rate2" 
                                    editing={false}
                                    renderStarIcon={() => <span className='circle'></span>}
                                    starCount={5}
                                    value={course.process}
                                    
                                    />
                                </div>
                                <div className="date">{course.endDate}</div>
                            </div>
                        </div>
                        
                    ))}
                </div>
                </div>
                ))}

       
    </div>
  )
}

const mapStateTOProps = (state) => ({

    selectList:selectList(state)
})

export default connect(mapStateTOProps)(Content)

// export default Content