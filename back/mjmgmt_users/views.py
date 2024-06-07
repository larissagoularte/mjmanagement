from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import generics, status
from .models import UserData

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(is_active=False)
        return Response(serializer.data)

class UserDetailView(APIView):
    def get(self, request, *args, **kwargs):
        user = UserData.objects.get(pk=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)