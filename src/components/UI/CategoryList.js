import React from 'react'
import Grid from '@material-ui/core/Grid'
import BlueCheckbox from './BlueCheckbox'

const CategoryList = ({ selectedCategories, setSelectedCategories, categories }) => {
    const addToSelectedCategories = categoryId => {
        let exists = selectedCategories.find((id) => id === categoryId)
        if(exists) {
            setSelectedCategories(selectedCategories.filter((id) => { 
                return id !== categoryId 
            }))
        } else {
            setSelectedCategories([...selectedCategories, categoryId])
        }        
    }
    return <Grid container spacing={2} className="questionCategoriesCheckboxList">
        {
            categories.map((category, i) => {
                return <Grid item xs={6} sm={6} md={4} key={i}>
                    <BlueCheckbox label={`${category.prettyName} ${i}`} name={`category-${i}`} onClick={() => addToSelectedCategories(category.id)} /> 
                </Grid>
            })
        }
    </Grid>
}

export default CategoryList