from rest_framework import serializers
from .models import Anuncio, ImagensAnuncio

class ImagensAnuncioSerializer(serializers.ModelSerializer):
  class Meta:
    model = ImagensAnuncio
    fields = '__all__'

class AnuncioSerializer(serializers.ModelSerializer):
  images = ImagensAnuncioSerializer(many=True, read_only=True)
  uploaded_images = serializers.ListField(
    child = serializers.FileField(allow_empty_file=False, use_url=True),
    write_only = True,
  )
  
  class Meta:
    model = Anuncio
    fields = [
      'id',
      'titulo',
      'descricao',
      'renda',
      'tipologia',
      'localidade',
      'cidade',
      'status',
      'publicado',
      'link_maps',
      'data_entrada',
      'area',
      'certificado_energetico',
      'animais_domesticos',
      'casas_banho',
      'condicao_uso',
      'tipo_imovel',
      'caucao',
      'fiador',
      'prazo_contrato',
      'infos_contrato',
      'garagem',
      'estacionamento',
      'mobiliado',
      'elevador',
      'tipo_eletricidade',
      'capacidade_lotacao',
      'wifi',
      'limpeza_quinzenal',
      'despesas',
      'fumadores',
      'created_at',
      'updated_at',
      'images',
      'uploaded_images'
    ]
    extra_kwargs = {"autor":{"read_only":True}}

  def create(self, validated_data):
    uploaded_images = validated_data.pop('uploaded_images')
    anuncio = Anuncio.objects.create(**validated_data)

    for image in uploaded_images:
      ImagensAnuncio.objects.create(anuncio=anuncio, images=image)

    return anuncio