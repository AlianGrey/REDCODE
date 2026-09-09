import ServiceDetails from '../../components/ServiceDetails/ServiceDetails.jsx'
import SEO from '../../components/SEO/SEO.jsx'


function ServicesPage() {
  return (
    <>
       <SEO
        title="Услуги"
        description="Разработка сайтов, создание систем дистанционного обучения, поддержка и сопровождение веб-проектов."
        url="https://redcode.ru/services"
      />
      <main>
          <section className="services-intro">
              <h1>Наши услуги</h1>
              <p>От идеи до проекта - один шаг</p>
          </section>
          <ServiceDetails />

      </main>
    </>
  )
}

export default ServicesPage