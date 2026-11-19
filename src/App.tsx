import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ApplicationDetailPage } from './pages/ApplicationDetailPage'
import { ApplicationsPage } from './pages/ApplicationsPage'
import { CalculatorPage } from './pages/CalculatorPage'
import { CellPage } from './pages/CellPage'
import { ContactPage, QuestionnairePage, ThankYouPage } from './pages/ContactPages'
import { DistributorsPage, InternationalPage, NorthAmericaPage } from './pages/DistributorsPage'
import { HomePage } from './pages/HomePage'
import { ImitatorsPage, NotFoundPage } from './pages/InfoPages'
import { ArticleDetailPage, ArticlesPage, PressPage, WhitepaperPage } from './pages/MediaPages'
import { ProductsPage } from './pages/ProductsPage'
import { SearchPage } from './pages/SearchPage'
import { SeriesPage } from './pages/SeriesPage'
import { StockPage } from './pages/StockPage'
import { SurveyPage } from './pages/SurveyPage'
import { TechnicalIndexPage, TechnicalPage } from './pages/TechnicalPages'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<SeriesPage />} />
        <Route path="products/:slug/:model" element={<CellPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="applications/:slug" element={<ApplicationDetailPage />} />
        <Route path="stock-check" element={<StockPage />} />
        <Route path="distributors" element={<DistributorsPage />} />
        <Route path="distributors/north-america" element={<NorthAmericaPage />} />
        <Route path="distributors/international" element={<InternationalPage />} />
        <Route path="media/articles" element={<ArticlesPage />} />
        <Route path="media/articles/:slug" element={<ArticleDetailPage />} />
        <Route path="media/press-releases" element={<PressPage />} />
        <Route path="media/whitepapers/:slug" element={<WhitepaperPage />} />
        <Route path="technical-data" element={<TechnicalIndexPage />} />
        <Route path="technical-data/:slug" element={<TechnicalPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact/thank-you" element={<ThankYouPage />} />
        <Route path="questionnaire" element={<QuestionnairePage />} />
        <Route path="questionnaire/thank-you" element={<ThankYouPage />} />
        <Route path="battery-calculator" element={<CalculatorPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="ad-survey" element={<SurveyPage />} />
        <Route path="be-aware-of-imitators" element={<ImitatorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
