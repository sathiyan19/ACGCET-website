import React,{useEffect} from "react";

import "./Facilities.css";

import { Underline } from "../../widgets";
import { Link } from "react-router-dom";

// import karaikudi_palace from "../../assets/pictures/Chettinad-new.webp";
// import hostel_life from "../../assets/pictures/hostel_life.webp";
// import crossyear from "../../assets/pictures/crossyear.webp";
// import library from "../../assets/pictures/library.webp";
// import iv from "../../assets/pictures/iv.webp";
// import sports from "../../assets/pictures/sports.webp";
// import technical from "../../assets/pictures/technical.webp";
import gym from "../../assets/pictures/gym.webp";
import murugappa from "../../assets/pictures/facilities/Murugappa-hall.webp";

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
// const gym="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/life_at_acgcet/gym.webp"

const Facilities = () => {
  useEffect(() => {
    document.title = 'ACCET-Centres & Facilities';
  }, []);
  return (
    <div className="facility_holder">
      <Underline heading="Centres & Facilities" />
      <div className="facility_grid_holder">
        <div class="facility_crd facility_item1">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Central Computer Centre
            </div>
            <div class="facility_crd_writing facility_text_1">
              In 2011, the Central Computer Centre was inaugurated, offering a
              spacious 400 sq.m built-up area. This center is well-equipped with
              30 computers to serve the technological needs of the campus
              community. Additionally, it includes a reliable 4 KVA Power backup
              UPS system, ensuring uninterrupted computing support and
              contributing to a robust technological infrastructure for the
              institution.
            </div>
            <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div class="facility_crd facility_item2">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">Hostel</div>
            <div class="facility_crd_writing facility_text_1">
              Our college hostels serve as a comforting home away from home for
              students, fostering an environment that cultivates self-confidence
              and discipline. Senior students play a pivotal role, guiding
              juniors and setting positive examples. Every resident is entrusted
              with preserving the dignity and self-respect of their fellow
              students, upholding the institution's collective reputation. The
              college boasts 6 Girl's hostels and 7 Boy's hostels, providing
              accommodations for around 1621 students. These hostels, including
              Kambar Illam, Kannadasan Illam, Tagore Illam, A P J Abdul Kalam
              Illam, Thiruvalluvar Illam, M K Venkatraman Illam, and Tholkapiyar
              Illam for boys, and Bharathi Illam, Annai Teresa Illam, Kuppusamy
              Naidu Illam, Manimegalai Illam, Annai Indira Gandhi Hostel, and
              Alagappa Ladies Hostel for girls, ensure a supportive and
              harmonious community for all residents.
            </div>
            <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div class="facility_crd facility_item3">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Medical Facility
            </div>
            <div class="facility_crd_writing facility_text_1">
              In house dispensary is functioning in the hostel campus. The unit
              has eight beds and medical facilities to treat emergency patients.
              The dispensary is functioning during forenoon sessions in all
              weekdays. Medical fitness of the students are examined and
              certified at the time of admission. Periodically medical camps are
              conducted to create awareness among students about the importance
              of health care.
              <br />
              <br />
              Medical Officer: Dr.J.J.Karthikeyan, MD
              <br />
              Pharmacist: A. Chandrasekaran
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item4">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">College Bus</div>
            <div class="facility_crd_writing facility_text_1">
              Our college offers an exceptional college bus service, catering to
              the transportation needs of day scholars in Karaikudi. Despite
              having a majority of hostellers, the college bus ensures an
              efficient and cost-effective commute for those who need it.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item5">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">Post Office</div>
            <div class="facility_crd_writing facility_text_1">
              Our college boasts the convenience of an on-campus post office,
              ensuring that students and staff can easily manage their postal
              needs. This amenity simplifies mailing and receiving packages,
              making campus life more efficient.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item6">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">Murugappa Hall</div>
            <div class="facility_crd_writing facility_text_1">
            The college's auditorium, affectionately named Dewan Bahadur Murugappa Hall, stands as a prominent and versatile facility within the campus. With a generous seating capacity of around 600, it serves as a pivotal hub for a wide range of college functions and events. The auditorium's expansive stage provides an ideal platform for hosting a diverse array of activities, from significant Graduation day ceremonies to captivating cultural performances and informative academic programs.

This versatile venue doesn't merely serve as a physical space but rather as a backdrop that enriches the college experience. It provides students, faculty, and esteemed guests with an inspiring and impactful environment in which to share moments of celebration, reflection, and learning. Whether commemorating academic achievements or showcasing artistic talents, the auditorium symbolizes the college's commitment to community, academic excellence, and the fostering of a strong sense of togetherness and achievement among all who pass through its doors.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item7">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">Library</div>
            <div class="facility_crd_writing facility_text_1">
              Nestled at the heart of our institution, the college's central
              library boasts an expansive 1075 square meters of carpet area,
              serving as an invaluable hub for students and faculty. It
              comprises three distinct stack rooms, each tailored to specific
              needs. Two stack rooms house an extensive collection of general
              books, ensuring ready access to a diverse range of subjects. A
              separate stack room is dedicated to the SC/ST book bank, promoting
              inclusivity and easy access to these resources. The third stack
              room is a designated reference section, facilitating in-depth
              research and study. In addition to these physical resources, the
              library's digital hall is equipped with 30 computers, all
              interconnected to the internet, enabling seamless access to a
              wealth of e-resources. The library's holdings are equally
              impressive, with 62,291 hardbound books and 2,323 e-books,
              covering an array of disciplines. To keep students and faculty
              up-to-date, the library subscribes to e-journals, making current
              research and academic publications readily available. In essence,
              this central library stands as a cornerstone for learning,
              research, and intellectual growth within the academic community.
            </div>
            <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div class="facility_crd facility_item8">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Cooperative Store
            </div>
            <div class="facility_crd_writing facility_text_1">
              Alagappa Chettiar College of Engineering and Technology Students
              Co-operative Society Limited, established on January 19, 1956,
              automatically enrolls every student upon admission, making them a
              member of the co-operative store. This store primarily serves the
              needs of the student body and functions with both students and
              staff as members on the campus.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item9">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Sport Facilities
            </div>
            <div class="facility_crd_writing facility_text_1">
              The Department of Physical Education at our institution is
              privileged to offer state-of-the-art sports facilities that
              inspire and motivate students to actively participate in various
              sports and games. Recognizing the importance of physical activity
              and fitness in enhancing academic performance, students are
              encouraged to engage in at least one sport or game. Our extensive
              infrastructure includes amenities like badminton and ball
              badminton courts, basketball and volleyball courts, cricket and
              football pitches, hockey and tennis grounds, a gym room, table
              tennis, and a kho kho court.
            </div>
            <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div class="facility_crd facility_item10">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Canteen
            </div>
            <div class="facility_crd_writing facility_text_1">
            The college's canteen is a haven for budget-conscious students, offering pocket-friendly meals that not only fit their wallets but also provide a home-like dining experience. With a focus on wholesome and nutritious options, it ensures students enjoy healthy meals while away from home.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item11">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Zonal Office
            </div>
            <div class="facility_crd_writing facility_text_1">
            In 2001, the Government of Tamilnadu unified engineering colleges under Anna University for a consistent technical education curriculum. Colleges were grouped into zones for streamlined examinations. Alagappa Chettiar College of Engineering and Technology became the Zone 9 Zonal office, overseeing 32 colleges in the districts of Sivagangai, Ramanathapuram, Pudukottai, Dindigul, Theni, and Madurai. In 2012, the university expanded to 20 zones, with Karaikudi's Zonal office now assigned to Zone-14, supervising 20 colleges in Sivagangai, Ramanathapuram, and Pudukottai districts. The Zonal office, headed by the institution's Principal as Zonal Coordinator, along with a dedicated team, has successfully managed examinations for affiliated institutions for the past two decades.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item12">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Staff Quarters
            </div>
            <div class="facility_crd_writing facility_text_1">
            The institution offers 31 quarters for faculty and staff, with government-regulated rent. Distribution: 1 for the principal, 4 for professors, 6 for associate professors, 8 for assistant professors, and 12 for non-teaching.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

        <div class="facility_crd facility_item13">
          <div class="facility_head_image">
            <img class="facility_image" src={murugappa} />
          </div>
          <div className="facility_crd_content">
            <div className="facility_head facility_text_1">
              Parking Lot
            </div>
            <div class="facility_crd_writing facility_text_1">
            The college's parking facility caters to the needs of students, accommodating between 70 to 90 two-wheelers. This ample space provides a convenient and secure area for parking, ensuring that everyone can easily commute to and from the college without the hassle of finding parking space outside.
            </div>
            {/* <div className="facility_read_more">
              <Link className="facility_read_link read_link_1" to="#">
                Read more
              </Link>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Facilities;
