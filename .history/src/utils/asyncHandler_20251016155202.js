//const asyncHandler = () => {}




export {asyncHandler}

const asyncHandler = (fn) => async (req,res,next) => {
    try {
        await 
    } catch(error){
        res.status(error.code || 500).json({
            success :false,
            message : err.message
        })
    }
}