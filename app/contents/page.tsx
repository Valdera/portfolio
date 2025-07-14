import Navigation from "@/components/navigation/Navigation";
import Carousel from "@/components/carousel/Carousel";

// Sample data - replace with your actual content
const blogs = [
  {
    id: "1",
    title: "Building Scalable Cloud Solutions",
    description: "Learn how to architect and implement scalable solutions in the cloud.",
    image: "/images/blog-1.jpg",
    link: "https://medium.com/@your-username/article-1",
  },
  {
    id: "2",
    title: "Modern Web Development Best Practices",
    description: "Explore the latest trends and best practices in web development.",
    image: "/images/blog-2.jpg",
    link: "https://medium.com/@your-username/article-2",
  },
];

const videos = [
  {
    id: "1",
    title: "Cloud Architecture Tutorial",
    description: "A comprehensive guide to cloud architecture patterns.",
    image: "/images/video-1.jpg",
    link: "https://youtube.com/your-channel/video-1",
  },
  {
    id: "2",
    title: "Web Development Tips",
    description: "Essential tips and tricks for modern web development.",
    image: "/images/video-2.jpg",
    link: "https://youtube.com/your-channel/video-2",
  },
];

const courses = [
  {
    id: "1",
    title: "Cloud Computing Masterclass",
    description: "Master cloud computing with hands-on projects.",
    image: "/images/course-1.jpg",
    link: "https://udemy.com/course/cloud-computing",
  },
  {
    id: "2",
    title: "Full Stack Development",
    description: "Learn full stack development from scratch.",
    image: "/images/course-2.jpg",
    link: "https://udemy.com/course/full-stack",
  },
];

const Contents = () => {
  return (
    <>
      <Navigation />
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold">My Content</h1>
        
        <div className="space-y-12">
          {/* Medium Blogs */}
          <section>
            <Carousel items={blogs} title="Medium Blogs" />
          </section>

          {/* YouTube Videos */}
          <section>
            <Carousel items={videos} title="YouTube Videos" />
          </section>

          {/* Udemy Courses */}
          <section>
            <Carousel items={courses} title="Udemy Courses" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Contents; 