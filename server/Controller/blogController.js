import blogData from '../Model/blogmodel';

const Articles = [];

 class blogController{
     static getAllBlog=(req,res)=> {
        const data= Articles;
        return res.status(200).json({
            status:200,
            message:"these are blogs",
            data

        })
     }
     static createBlog =(req,res)=>{
         const blogId=Articles.length + 1
         let {
            
             title,
             content,
             userId,
            }= req.body;
            const timestamp = new Date(Date.now());
           const Article= new blogData(blogId, title, content, timestamp, userId);
           Articles.push(Article);
           const data = Articles.find((Article)=> Article.blogId=== blogId);

          if(!data){
               
            return res.status(417).json({
                    status:417,
                    message: "blog not created",
                 
               })
            }
            return res.status(201).json({
                status:201,
                message: "blog is created successfully",
                data
            })
          
               
               
           
            
           
        }
    static getAllBlog=(req, res)=>{

         const data= Blogs;

      return res.status(200).json({
        status:200,
        message:'posts available here',
        data
    })

    }   
    }
    

     export default blogController;