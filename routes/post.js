import express from "express"

const router = express.Router() 

router.router("/").get().post()
router.route("/:id").get().put().delete()

export default router;