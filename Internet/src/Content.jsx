import "./Content.css";
import InternetImage from "./assets/InternetImage.gif";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png"; 

function Content() {
  return (
    <>
      <Internet></Internet>
      <HowDoesHostingWorks></HowDoesHostingWorks>
    </>
  );
}

function Internet() {
  return (
    <>
      <div className="Internet">
        <h2>
          The internet is a collaboration between computers all over the world.
        </h2>
        <h3>
          As you sit in front of your computer, ready to explore a website, a
          series of digital connections spring into action. Your computer
          communicates with DNS servers, unraveling the web address into the
          precise IP address it needs. Next, a chain of computers collaborates
          to establish a seamless connection to the website's server, optimizing
          the process for speed and reliability. Once connected, your computer
          and the server engage in a conversation using the TCP/IP language,
          exchanging data packets that ensure accurate delivery. It's a dynamic
          and robust network that spans the globe, providing you with a smooth
          browsing experience.
        </h3>
        <img src={InternetImage}></img>
      </div>
    </>
  );
}

function HowDoesHostingWorks() {
  return (
    <>
      <div className="HeaderForHowHostingWorks">
        <h2>Web Hosting</h2>
      </div>

      <div className="ContentForHowHostingWorks">
        <h2>
          We use Docker to package our website and its dependencies into
          isolated containers. This ensures that our website runs consistently
          across different environments, making it easier for us to deploy and
          manage. With Node.js, we leverage its powerful runtime environment to
          build scalable and high-performance web applications. It provides us
          with a vast ecosystem of libraries and frameworks that help streamline
          our development process. To handle incoming requests and distribute
          them efficiently, we rely on Nginx. It acts as a reverse proxy and
          load balancer, directing traffic to different instances of our
          website. This load balancing mechanism ensures optimal resource
          utilization and improved performance for our users. To make our
          website even more robust and secure, we integrate Cloudflare DNS. It
          acts as a mediator between our users and our hosting infrastructure.
          Cloudflare DNS routes traffic efficiently and provides additional
          security features like DDoS protection, SSL/TLS encryption, and
          caching. This helps ensure that our website remains accessible, fast,
          and secure for our visitors. By combining Docker, Node.js, Nginx, and
          Cloudflare DNS, we have created a hosting setup that provides a
          seamless browsing experience, scales well with increasing traffic, and
          prioritizes the security and performance of our website.
        </h2>

        <img src={Image1}></img>
        <img src={Image2}></img>
        <img src={Image3}></img>
      </div>
    </>
  );
}

export default Content;
