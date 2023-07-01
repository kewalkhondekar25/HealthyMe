import React from 'react'

const FAQ = () => {
    return (
        <section className='faq p-3'>
            <span className='faq-title'>FAQs</span>
            <div className="accordion" id="ac">
                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>What are tips for anyone wanting to transition to eating more plant-based?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac1">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac1" data-bs-parent="#ac">
                        <p>Be kind to yourself, take it slow, and enjoy the process. Learn as much as you can,
                            and tackle one new thing at a time so as to not overwhelm yourself. Start small. Consider starting
                            to replace your cow's milk with oat, soy, or almond milk. Then consider swapping out dairy yogurt for
                            plant-based yogurts. Luckily, there are many plant-based meat and dairy alternatives on the market.
                            It can also help if you find plant-based versions of recipes you already enjoy.
                        </p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Which supplements are recommended for vegans?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac2">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac2" data-bs-parent="#ac">
                        <p>We recommend taking vitamin B12, vitamin D, and possibly an algae omega-3 supplement.
                            The dose and the amount you'd need depends on a few factors like age, gender,
                            geographical location, season, diet, and lifestyle.</p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Is HealthyMe meals only meant for those who are plant-based or vegan?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac3">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac3" data-bs-parent="#ac">
                        <p>Certainly not! HealthyMe meals can be enjoyed by all, regardless of dietary choices.
                            At HealthyMe, we do believe in the many health, environmental, and ethical benefits of following a plant-based lifestyle,
                            but we would never pressure it on anyone. Ultimately, this is your decision.
                            We hope that if you do choose to include more plants in your life,
                            our meals helps you feel more confident in doing so ☺️</p>
                    </div>
                </div>
                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>Is HealthyMe meals affordable?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac4">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac4" data-bs-parent="#ac">
                        <p>Absolutely! On average, people spend approximately &#8377;45-&#8377;150 each day on food that does
                             guarantee proper portions, convenience, balanced vitamins and minerals, nutrition, or overall quality.
                              Healthy Meals, provides you with all of those benefits at a comparable daily rate.
                               Our pricing stems from quality. Highly experienced chefs and top quality ingredients are what
                                we insist upon to ensure you are getting exactly what you are paying for.
                        </p>
                    </div>
                </div>

                <div className="accordion-item mb-3">
                    <div className="accordion-header d-flex justify-content-between p-3">
                        <div>
                            <h3>How and when are the meals delivered to me?</h3>
                        </div>
                        <div>
                            <button className="btn btn-dark w-100" data-bs-toggle="collapse" data-bs-target="#ac5">
                                <span className="bi bi-plus"></span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion-body accordion-collapse collapse p-3" id="ac5" data-bs-parent="#ac">
                        <p>Your meals are delivered bright and early each weekday;
                             guaranteed to be on your doorstep by 11 a.m.
                              We simply drop your meals off in your specified address.
                               Your meals are there ready and waiting for you to take with you, 
                                 it’s easy and convenient!</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FAQ
