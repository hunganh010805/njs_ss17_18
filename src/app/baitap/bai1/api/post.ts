import { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  id: number;
  title: string;
  url:string;
  thumbnailUrl: string;
};

export default function handler(request: NextApiRequest, response: NextApiResponse<Post[]>) {
  const posts: Post[] = [
    {
        
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
       
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      },
      {
      
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
       
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      {
      
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
      },
      {
     
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
      },
      {
   
        id: 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      },
      {
        
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
      },
      {
       
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
      },
  ];
  response.status(200).json(posts);
}
