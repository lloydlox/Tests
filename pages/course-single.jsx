import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PageHeaderTwo from '@/components/layout/pageheader-2';
import Author from '@/components/sidebar/author';
import Comment from '@/components/sidebar/comment';
import CourseSideDetail from '@/components/sidebar/course-detail';
import QuestionsY11 from '@/components/section/QuestionsY11';
// import Respond from '@/components/sidebar/respond';

const CourseSingle = () => {
  return (
    <>
      <Header />
      <PageHeaderTwo />
      <div className='course-single-section padding-tb section-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='main-part'>
                <div className='course-item'>
                  <div className='course-inner'>
                    <div className='course-content'>
                      <h3>Course Overview</h3>
                      <p>
                        In this course take you from the fundamentals and
                        concepts of data modeling all the way through anumber of
                        best practices and techniques that you’ll need to build
                        data models in your organization. You’ll find many By
                        the end of the course, you’ll be all set to not only put
                        these principles to works but also to maike the key data
                        modeling and design decisions required by the info data
                        modeling that transcend the nuts-and-bolts that clearly
                        the key covered the course and design patterns.
                      </p>
                      <h4>What You&apos;ll Learn in This Course:</h4>
                      <ul className='lab-ul'>
                        <li>
                          <i className='icofont-tick-mark'></i>Ready to begin
                          working on real-world data modeling projects
                        </li>
                        <li>
                          <i className='icofont-tick-mark'></i>Expanded
                          responsibilities as part of an existing role
                        </li>
                        <li>
                          <i className='icofont-tick-mark'></i>Be able to create
                          Flyers, Brochures, Advertisements
                        </li>
                        <li>
                          <i className='icofont-tick-mark'></i>Find a new
                          position involving data modeling.
                        </li>
                        <li>
                          <i className='icofont-tick-mark'></i>Work with color
                          and Gradients and Grids
                        </li>
                      </ul>
                      <p>
                        In this course take you from the fundamentals and
                        concepts of data modeling all the way through anumber of
                        best practices and techniques that you’ll need to build
                        data models in your organization. You’ll find many
                        examples that clearly the key covered the course
                      </p>
                      <p>
                        By the end of the course, you’ll be all set to not only
                        put these principles to works but also to maike the key
                        data modeling and design decisions required by the info
                        data modeling that transcend the nuts-and-bolts that
                        clearly the key covered the course and design patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='course-video'>
                  <div className='course-video-title'>
                    <h4>Topics</h4>
                  </div>
                  <div className='course-video-content'>
                    <div className='accordion' id='accordionExample'>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion01'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist1'
                            aria-expanded='true'
                            aria-controls='videolist1'
                          >
                            <span>
                              Topic 1. Atomic Structure, Periodic Table and
                              Stoichiometry
                            </span>{' '}
                            <span>5 Questions, 17:37</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>Topic 2: Bonding and Stoichiometry</span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 3: Kinetic Theory, Gas Laws and
                              Stoichiometry
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 4: Rates of Reactions Thermodynamics and
                              Stoichiometry
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 5: Chemical reactions and Stoichiometry
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 6: Bonding and Intermolecular Forces{' '}
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 7: Solutions, Separation Techniques &
                              Stoichiometry
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>
                              Topic 8: Acids -Bases and Stoichiometry{' '}
                            </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>Topic 9: Organic Chemistry </span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                      <div className='accordion-item'>
                        <div className='accordion-header' id='accordion02'>
                          <button
                            className='d-flex flex-wrap justify-content-between'
                            data-bs-toggle='collapse'
                            data-bs-target='#videolist2'
                            aria-expanded='true'
                            aria-controls='videolist2'
                          >
                            <span>Topic 10: Science Inquiry Skills</span>{' '}
                            <span>5 Questions, 52:15</span>{' '}
                          </button>
                        </div>
                        <QuestionsY11 />
                      </div>
                    </div>
                  </div>
                </div>
                <Author />
                <Comment />
                {/* <Respond /> */}
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar-part'>
                <CourseSideDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseSingle;
