const express =require('express');
const Schema1Model = require('./schema');
const router=express.Router();
const model1 = require('./schema').Schema1Model;
const model2 = require('./schema').Schema2Model;

router.get('/:name',async(req,res)=>{
   try{
    const user=await model1.find({cat:req.params.name})
    res.json(user)
   }
   catch(err)
   {
    res.send('error '+err)
   }
})
router.get('/:otp/otps',async(req,res)=>{
  try{
   const user=await model2.find({otp:req.params.otp})
   res.json(user)
  }
  catch(err)
  {
   res.send('error '+err)
  }
})

router.get('/api/schemadatas', (req, res) => {
  model2.find({}, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const counts = groupByFirstIndex(docs);
    res.json(counts);
  });
});


function groupByFirstIndex(docs) {
  const result = {};
  let sum=0;
  for (let i = 0; i < docs.length; i++) {
    const items = docs[i].list;
    
    for (let j = 0; j < items.length; j++) {
      const item = items[j];
      const name = item[0];
      const url = item[3];

      if (!result[name]) {
        result[name] = { count: 0, url };
      }
   
        result[name].count++;
        sum += parseInt(item[1]);
       
    }
  }
  console.log(sum)

  const counts = [];

  for (const name in result) {
    const { count, url } = result[name];
    counts.push({ name, count, url,sum });
  }

  return counts;
}

router.get('/route', async (req, res) => {
  try {
    const result = await model2.aggregate([
      { $unwind: "$list" },
      { $group: {
        _id: { $arrayElemAt: [ "$list", 0 ] },
        docs: { $push: "$$ROOT" },
        count: { $sum: 1 }
      }},
      { $sort: { _id: 1 } }
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
   try {
     const users = await model2.find();
     res.json(users);
   } catch (err) {
     res.send('error ' + err);
   }
 });

router.post('/', async(req,res)=>{
  const model=new model2({
    list:req.body.list,
    otp:req.body.otp
  })
  try{
    const a=await model.save()
    res.json(a)  
  }
  catch(err){
    res.send('Error')
  }
});


module.exports=router;