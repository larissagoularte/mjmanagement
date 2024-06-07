from django.urls import path
from .views import CriarAnuncioView, DetalhesAnuncioView, EditarAnuncioView, ExcluirAnuncioView, AnunciosUtilizadorView, BuscarImagensView, ExcluirImagemView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
  path('api/novo-anuncio/', CriarAnuncioView.as_view(), name='novo-anuncio'),
  path('api/anuncios/<int:pk>/', DetalhesAnuncioView.as_view(), name='detalhes-anuncio'),
  path('api/excluir-anuncio/<int:pk>/', ExcluirAnuncioView.as_view(), name='excluir-anuncio'),
  path('api/editar-anuncio/<int:pk>/', EditarAnuncioView.as_view(), name='editar-anuncio'),
  path('api/user/anuncios/', AnunciosUtilizadorView.as_view(), name='anuncios-utilizador'),
  path('api/anuncios/<int:pk>/imagens/', BuscarImagensView.as_view(), name='imagens-anuncio'),
  path('api/imagens/<int:pk>/excluir/', ExcluirImagemView.as_view(), name='excluir-imagem')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
