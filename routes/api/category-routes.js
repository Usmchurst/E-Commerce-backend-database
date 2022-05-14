const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({ include:{ model: Product,
 
  // be sure to include its associated Products
  attributes:['id','product_name','price','stock','category_id']}
})
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne ({  where: { id: req.params.id,},
  // be sure to include its associated Products
   include: { include:{model: Product,
    attributes:['id','product_name','price','stock','category_id']}
  }})
  .then((category) => res.json(category))
  .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req,body, {
    where: { id: req.params.id} 
})
  .then(categories => { if (!categories) { res.status(400).json({message: 'Nothing found'});
  return; 
} 
  res.json(Category); }) .catch(err => {console.log(err); res.status(500).json(err);
  });
});
 

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id:req.params.id } }).then(category => { if (!category)
   res.status(400).json({ message: 'nothing found'});
  return; 
  
  res.json(Category); }) .catch(err => {console.log(err); res.status(500).json(err);
  });
});

module.exports = router;
