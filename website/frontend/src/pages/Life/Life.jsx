import React,{useEffect} from "react";
import "./Life.css";

import { Underline } from "../../widgets";
import { Link } from "react-router-dom";

// import karaikudi_palace from "../../assets/pictures/Chettinad-new.webp";
// import hostel_life from "../../assets/pictures/hostel_life.webp";
// import crossyear from "../../assets/pictures/crossyear.webp";
// import library from "../../assets/pictures/library.webp";
// import iv from "../../assets/pictures/iv.webp";
// import sports from "../../assets/pictures/sports.webp";
// import technical from "../../assets/pictures/technical.webp";
// import gym from "../../assets/pictures/gym.webp";

const karaikudi_palace =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/Chettinad-new.webp";
const hostel_life =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/hostel_life.webp";
const crossyear =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/crossyear.webp";
const library =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/library.webp";
const iv =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/iv.webp";
const sports =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/sports.webp";
const technical =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/technical.webp";
const culture_pic =
  "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/culture_pic.webp";

const gym = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/gym1.webp";

const Life = () => {
  useEffect(() => {
    document.title = 'ACCET-Life at Campus';
  }, []);
  return (
    <div className="life_at_acgcet_holder">
      <Underline heading="Life at ACGCET" />
      <div className="life_grid_holder">
        <div class="life_crd life_item1">
          <div class="life_head_image">
            <img class="life_image" src={karaikudi_palace} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_1">Karaikudi Locality</div>
            <div class="life_crd_writing life_text_1">
              Life in Karaikudi, a town nestled in the Sivaganga district of
              Tamil Nadu, is a unique and enriching experience for students. The
              town boasts a thriving educational ecosystem, with renowned
              institutions like Alagappa University and engineering colleges,
              attracting students from across India and beyond. This academic
              atmosphere provides students with access to quality education and
              a diverse, intellectually stimulating peer group. Karaikudi is a
              tapestry of cultures and traditions, making it a melting pot of
              diversity. Students have the opportunity to immerse themselves in
              various cultural celebrations and festivals, from Diwali to
              Pongal, experiencing vibrant music, dance, and traditional
              performances. Culinary delights await in Karaikudi, with its
              delectable South Indian cuisine. Local eateries offer authentic
              dishes like dosa, idli, and sambar, satisfying your taste buds
              without breaking the bank. The town also boasts remarkable temples
              and architectural wonders, including the opulent Chettinad houses,
              providing students with a glimpse into the region's rich history
              and artistic heritage. Affordable living costs, excellent
              connectivity to major cities, and access to natural beauty in the
              surrounding areas make Karaikudi an attractive destination for
              students. Beyond academics, opportunities for extracurricular
              activities, including sports, cultural clubs, and volunteer
              programs, abound, facilitating personal growth and the forging of
              lasting friendships. In summary, life in Karaikudi offers a
              harmonious blend of education, culture, affordability, and
              personal enrichment, making it an appealing choice for students
              seeking a distinctive and rewarding academic journey.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item2">
          <div class="life_head_image">
            <img class="life_image" src={library} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_2">Library</div>
            <div class="life_crd_writing life_text_2">
              The institution's library stands as a treasure trove of knowledge
              and enlightenment, housing a vast and diverse collection of books,
              journals, and digital resources. It offers a tranquil refuge for
              students and scholars alike, cultivating an ideal environment for
              research, study, and intellectual exploration. The dedicated
              library staff is committed to guiding patrons in their pursuit of
              information, facilitating easy access to a wealth of physical and
              digital materials. This is a hub of academic vibrancy, hosting
              intellectual discussions. Here, individuals from various
              disciplines converge to broaden their horizons, fostering a
              culture of inquisitiveness, education, and personal advancement.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_2" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item4">
          <div class="life_head_image">
            <img class="life_image" src={crossyear} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_4">Cross Year Bonding</div>
            <div class="life_crd_writing change_cross_text_lap life_text_4">
              The current senior-junior interaction in our college is a
              testament to the vibrant and welcoming atmosphere on campus.
              Seniors play a crucial role as mentors and friends to their junior
              counterparts. They offer guidance, share their experiences, and
              extend a warm hand of friendship. This supportive environment
              encourages open dialogue and the exchange of ideas, both
              academically and personally. Juniors, in turn, approach their
              seniors with respect and enthusiasm, recognizing the valuable
              insights and wisdom they bring to the table. This mutual respect
              and camaraderie create an environment where laughter, advice, and
              friendship flourish. It extends beyond the classroom, with seniors
              and juniors often collaborating on projects, participating in
              extracurricular activities together, and even organizing events.
              This healthy senior-junior interaction enriches the overall
              college experience, ensuring that newcomers feel not only
              academically supported but also emotionally and socially welcomed.
              It fosters a sense of unity and belonging, creating lasting bonds
              that extend well beyond the college years.
            </div>
            <div class="life_crd_writing change_cross_text_900 life_text_4">
              The existing senior-junior interaction in our college is
              characterized by a harmonious blend of mentorship and camaraderie.
              Seniors warmly welcome juniors, offering guidance, support, and
              friendship. This atmosphere of trust and respect encourages open
              communication, making it easy for juniors to seek advice and share
              their concerns. Seniors, in turn, share their experiences and
              insights, creating a strong support network. This interaction
              extends beyond academics, with seniors and juniors often
              collaborating on projects, participating in extracurricular
              activities, and organizing events together. The result is a
              college community that thrives on mutual respect, cooperation, and
              a shared commitment to personal and academic growth.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_4" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item3">
          <div class="life_head_image">
            <img class="life_image" src={gym} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_3">Build yourself in Gym!</div>
            <div class="life_crd_writing life_text_3">
              The college campus gym is a student haven for physical fitness and
              well-being. Equipped with modern exercise machines, free weights,
              and cardio equipment, it offers a convenient and motivating space
              for students to maintain a healthy lifestyle. Beyond exercise, the
              gym fosters a sense of community, with students working out
              together and supporting one another's fitness goals. It serves as
              a valuable resource, promoting not only physical health but also a
              balanced, holistic approach to student life.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_3" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item5">
          <div class="life_head_image">
            <img class="life_image" src={iv} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_5">Industrial Visits</div>
            <div class="life_crd_writing life_text_5">
              College industrial visits provide practical exposure, bridging
              theory and real-world applications. They let students see
              classroom concepts in action, broaden their horizons, and
              facilitate networking with professionals for potential internships
              and mentorships. Witnessing successful projects inspires
              motivation. Identifying industry challenges encourages critical
              thinking and innovation. Industrial visits enhance skills,
              knowledge, and confidence, preparing students for successful
              careers.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_5" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item6">
          <div class="life_head_image">
            <img class="life_image" src={hostel_life} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_6">Hostel Life</div>
            <div class="life_crd_writing life_text_6">
              Hostel life is a distinctive and transformative experience for
              students, providing a unique blend of independence, camaraderie,
              and personal growth. It's a microcosm of diverse individuals from
              various backgrounds, coming together to form a close-knit
              community. In the hostel, students learn essential life skills
              such as time management, budgeting, and interpersonal
              communication. Sharing rooms and common spaces teaches
              responsibility, compromise, and mutual respect. Late-night
              discussions and group studies become cherished memories, fostering
              lasting friendships. However, hostel life isn't without its
              challenges. Homesickness, conflicts, and adjusting to communal
              living can be hurdles to overcome. Yet, these challenges also
              offer opportunities for personal growth and resilience. Hostel
              life offers an environment conducive to academic growth. The
              proximity to study partners makes it easier to collaborate on
              assignments and projects, fostering a culture of shared knowledge
              and peer learning. Late-night study sessions in common areas are
              common, creating a dedicated and focused atmosphere. Moreover, the
              presence of seniors who have already navigated the academic
              challenges can provide valuable insights and guidance to juniors,
              contributing to their overall educational development.
              Additionally, the sense of community in hostels encourages
              students to engage in extracurricular activities and explore their
              interests. Whether it's participating in sports, cultural events,
              or joining clubs, hostels often serve as hubs for diverse
              interests and talents to flourish. This not only enriches one's
              college experience but also helps in personal growth and character
              development. In essence, hostel life is a multifaceted experience
              that combines personal independence, academic support, and social
              engagement. It's a crucial part of the college journey, shaping
              individuals, creating lasting friendships, and providing a
              platform for holistic development. Hostel life at ACGCET is a
              transformative phase in a student's journey. It teaches
              independence, nurtures friendships, and imparts life skills that
              go beyond the classroom. It's a time of self-discovery, cultural
              exchange, and memories that will last a lifetime.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_6" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item7">
          <div class="life_head_image">
            <img class="life_image" src={sports} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_7">Sports</div>
            <div class="life_crd_writing life_text_7">
              Sports play a pivotal role in a student's college life, offering
              physical fitness, stress relief, and personal growth.
              Participation in team sports fosters teamwork, leadership skills,
              and time management abilities. Beyond the physical benefits,
              sports instill values like resilience and sportsmanship. They also
              create lasting social bonds among teammates and contribute to the
              sense of community within the college. Whether as athletes or for
              recreation, sports enrich the college experience, providing
              holistic development and valuable life lessons.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_7" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item8">
          <div class="life_head_image">
            <img class="life_image" src={technical} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_8">Technical Environment</div>
            <div class="life_crd_writing change_cross_text_lap life_text_8">
              The technical environment in the college is characterized by the
              robust infrastructure and modern facilities that support
              cutting-edge education and research. High-speed Wi-Fi, computer
              labs equipped with the latest hardware and software, and smart
              classrooms enhance the learning experience. The college often
              hosts workshops, seminars, and tech-related events, fostering a
              culture of innovation and knowledge sharing. Additionally,
              tech-savvy faculty and technical support teams ensure students
              have a seamless learning experience, preparing them for the
              evolving demands of the digital age and providing them with a
              competitive edge in their fields of study.
            </div>
            <div class="life_crd_writing change_cross_text_900 life_text_8">
              The technical environment in our college is distinguished by its
              robust infrastructure and state-of-the-art facilities, creating an
              ideal ecosystem for cutting-edge education and research. The
              availability of high-speed Wi-Fi, well-equipped computer labs
              featuring the latest hardware and software, and smart classrooms
              greatly enhance the overall learning experience for students.
              These resources facilitate dynamic and interactive learning,
              enabling students to stay at the forefront of technology trends.
              Furthermore, the college frequently hosts a range of workshops,
              seminars, and technology-focused events. These gatherings not only
              supplement the curriculum but also encourage a culture of
              innovation and knowledge sharing among students and faculty.
              Students have access to online libraries, extensive research
              databases, and academic portals, which significantly aid their
              research endeavors and academic pursuits. In addition to advanced
              facilities, our college boasts a team of tech-savvy faculty
              members and dedicated technical support teams. They ensure that
              students have a seamless learning experience, providing guidance,
              troubleshooting assistance, and mentorship.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_8" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="life_crd life_item9">
          <div class="life_head_image">
            <img class="life_image" src={culture_pic} />
          </div>
          <div className="life_crd_content">
            <div className="life_head life_text_9">Cultural Events</div>
            <div class="life_crd_writing life_text_9">
              Cultural events in the college are vibrant and diverse,
              celebrating the rich tapestry of traditions and talents within the
              student community. These events showcase a myriad of art forms,
              including music, dance, theater, and visual arts. They serve as
              platforms for students to express their creativity, explore their
              cultural heritage, and promote cultural exchange. From traditional
              festivals and cultural weeks to talent shows and exhibitions,
              these events foster unity and understanding among students from
              various backgrounds. They also provide opportunities for students
              to develop organizational skills, leadership, and teamwork. These
              cultural gatherings are a source of entertainment, education, and
              community-building, enriching the college experience.
            </div>
            {/* <div className="life_read_more">
              <Link className="life_read_link read_link_9" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;
