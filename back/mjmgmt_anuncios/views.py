from django.shortcuts import render
from rest_framework import generics, status
from .models import Anuncio, ImagensAnuncio
from .serializers import AnuncioSerializer, ImagensAnuncioSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions import IsOwnerOrReadOnly
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.exceptions import ValidationError
import os

class CriarAnuncioView(generics.ListCreateAPIView):
  queryset = Anuncio.objects.all()
  serializer_class = AnuncioSerializer
  permission_classes = [IsAuthenticated]
  parser_classes = [MultiPartParser, FormParser]

  def perform_create(self, serializer):
    serializer.save(autor=self.request.user)

class DetalhesAnuncioView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Anuncio.objects.filter(publicado=True)
  serializer_class = AnuncioSerializer
  permission_classes = [AllowAny]

class EditarAnuncioView(generics.RetrieveUpdateAPIView):
  queryset = Anuncio.objects.all()
  serializer_class = AnuncioSerializer
  permission_classes = [IsOwnerOrReadOnly]

class ExcluirAnuncioView(generics.DestroyAPIView):
  queryset = Anuncio.objects.all()
  serializer_class = AnuncioSerializer
  permission_classes = [IsOwnerOrReadOnly]

  def destroy(self, request, *args, **kwargs):
    instance = self.get_object()
    instance.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

class AnunciosUtilizadorView(generics.ListAPIView):
  serializer_class = AnuncioSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    return Anuncio.objects.filter(autor=self.request.user)

class BuscarImagensView(generics.RetrieveAPIView):
  queryset = Anuncio.objects.all()
  serializer_class = ImagensAnuncioSerializer

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    images_queryset = instance.images.all()
    serializer = self.get_serializer(images_queryset, many=True)
    return Response(serializer.data)

class ExcluirImagemView(generics.DestroyAPIView):
  queryset = ImagensAnuncio.objects.all()
  permission_classes = [IsOwnerOrReadOnly]

  def delete(self, request, *args, **kwargs):
    try:
      image = self.get_object()
      image.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
    except ImagensAnuncio.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)