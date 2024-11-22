import cooking from '../assets/images/cooking.jpg'
import gardening from '../assets/images/gardening.jpg'
import childMinding from '../assets/images/child-minding.jpg'

export const sixWeekCourse = [
    {
        id: 1,
        name: 'Garden maintenance',
        description: 'To provide basic knowledge of watering, pruning and planting in a domestic garden Content',
        image: gardening ,
        price: 750,
        perk:`• Water restrictions and the watering requirements of indigenous and exotic plants
• Pruning and propagation of plants
• Planting techniques for different plant types`,
    },
    {
        id: 2,
        name: 'Cooking',
        description: 'To prepare and cook nutritious family meals Content',
        image: cooking,
        price: 750,
        perk:`
• Nutritional requirements for a healthy body
• Types of protein, carbohydrates and vegetables
• Planning meals
• Preparation and cooking of meals`,
    },
    {
        id: 3,
        name: 'Child minding',
        description:'To provide basic child and baby care Content' ,
        image:childMinding ,
        price: 750,
        perk:`

• birth to six-month old baby needs
• seven-month to one year old needs
• Toddler needs
• Educational toys`,
    },

];


