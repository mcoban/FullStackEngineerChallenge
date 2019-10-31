const { Router } = require('express')

const router = Router()

router.get('', (req, res) => {
    res.send('i am admin :)')
})


module.exports = router