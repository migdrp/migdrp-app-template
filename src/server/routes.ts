import express from 'express';
import path from 'path';

const router = express.Router();




router.use('/webcomponents', express.static(path.join(__dirname, `../../node_modules`)));

router.use('/dist', express.static(path.join(__dirname, `../../dist`)));


router.use('/', express.static(path.join(__dirname, `../../dist`)));


/*
router.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname + `../../../dist/index.html`));
});

*/



export default router;