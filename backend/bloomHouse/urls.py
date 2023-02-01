from django.urls import path,include
from .views import *
from bloomHouse import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'annonce', views.AnnonceView, basename='annonce')
router1=DefaultRouter()
router.register(r'Localisation', views.LocalisationView, basename='Localisation')
router2= DefaultRouter()
router2.register(r'mesannonces', views.MesAnnoncesView, basename='mesannonces')

urlpatterns = [
    path('google/', GoogleSocialAuthView.as_view()), 
    path('annonce/', include(router.urls)),
    path('mesannonces/',include(router2.urls)),
    path('Localisation/',include(router1.urls)),
]