import Category from '../models/category'
import Meal from '../models/Meal'


export const CATEGORIES =[
    new Category("c1","Indian","#fffacd"),
    new Category("c2","hamburgers","#add8e6"),
    new Category("c3","Thai","#ffb6c1"),
    new Category("c4","BreakFast","#ffe4b5"),
    new Category("c5","pizza","greenyellow"),
    new Category("c6","Spanish","dodgerblue"),
    new Category("c7","Italian","#008080"),
    new Category("c8","Chinese","#ff6347"),
    new Category("c9","FastFood","#fa8072"),
    new Category("c10","Diet","#98fb98"),
]

export const MealData =[
    new Meal('1','c1','Chicken Biryani',30,"Affordable",require('../images/chickenbiryani.jpg')),
    new Meal('2','c1','Chicken Korma',40,"Affordable",require('../images/chickenkorma.jpg')),
    new Meal('3','c1','Malai Kabab',25,'Affordable',require('../images/malaikabab.jpg')),
    new Meal('4','c1','Chicken Tandoori',60,'pricey',require('../images/chickentandoori.jpg')),
    new Meal('5','c1','butter Chicken',20,'Affordabel',require('../images/butterchicken.jpg')),

    new Meal('6','c2','Mcaalo Tikki',20,"Affordable",require('../images/mcaloo.jpg')),
    new Meal('7','c2','Mharaja Mac',30,"Pricey",require('../images/maharajamac.jpg')),
    new Meal('8','c2','Cheese Burger',20,"Affordable",require('../images/cheeseburger.jpg')),
    new Meal('9','c2','Spicy burger',10,"Low price",require('../images/spicyburger.jpg')),
    new Meal('10','c2','Chilli burger',30,"Affordable",require('../images/chilliburger.jpg')),

    new Meal('11','c3','Mcaalo Tikki',20,"Affordable",require('../images/mcaloo.jpg')),
    new Meal('12','c3','Mharaja Mac',30,"Pricey",require('../images/maharajamac.jpg')),
    new Meal('13','c3','Cheese Burger',20,"Affordable",require('../images/cheeseburger.jpg')),
    new Meal('14','c3','Spicy burger',10,"Low price",require('../images/spicyburger.jpg')),
    new Meal('15','c3','Chilli burger',30,"Affordable",require('../images/chilliburger.jpg')),


    


]
