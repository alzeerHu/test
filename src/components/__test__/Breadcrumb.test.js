 import {render ,screen} from '@testing-library/react'
 import '@testing-library/jest-dom'
 import Breadcrumb from '../Blocks/Breadcrumb/Breadcrumb'

 describe("Test " , () =>{

    it('render the Breadcrumb without error' ,() =>{
        render(<Breadcrumb/>)
    })

     it(" the Breadcrumb component" ,() =>{
         const component= render(<Breadcrumb/>)
         let text1 = component.getByText('Home Page');
         let text2 = component.getByText('e-learning Course');

         expect(text1).toBeInTheDocument();
         expect(text2).toBeInTheDocument();
     })
 })