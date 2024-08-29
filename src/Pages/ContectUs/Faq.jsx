

const Faq = () => {
    return (
        <div>
          <section className="mb-10 pt-14">
          <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
          Frequently Asked Questions (FAQ)
          </h1>
        </div>  
          <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How do I place an order?
  </div>
  <div className="collapse-content"> 
    <p>To place an order, browse our products, add the desired items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return policy?
  </div>
  <div className="collapse-content"> 
    <p>We offer a 30-day return policy for most items. Products must be returned in their original condition with all packaging and accessories. Please visit our Return Policy page for more information.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Do your products come with a warranty?
  </div>
  <div className="collapse-content"> 
    <p>Yes, most of our products come with a manufacturer’s warranty. Warranty details are included with the product packaging and can also be found on the product page on our website.</p>
  </div>
</div>
          </section>  
        </div>
    );
};

export default Faq;